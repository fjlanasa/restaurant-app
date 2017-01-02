require 'sinatra'
require 'json'
require 'http'

CLIENT_ID = ENV['YELP_ID']
CLIENT_SECRET = ENV['YELP_SECRET']

API_HOST = "https://api.yelp.com"
SEARCH_PATH = "/v3/businesses/search"
TOKEN_PATH = "/oauth2/token"
GRANT_TYPE = "client_credentials"

def bearer_token
  url = "#{API_HOST}#{TOKEN_PATH}"

  access_params = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: GRANT_TYPE
  }

  response = HTTP.post(url, params: access_params)
  parsed = response.parse

  "#{parsed['token_type']} #{parsed['access_token']}"
end

get '/' do
  erb :layout
end

get '/api' do
  businesses = []
  price_string = ''
  price = params[:price].to_i
  (price-1).times do |i|
    price_string += "#{(i+1).to_s},"
  end
  price_string += params[:price]
  lat = nil
  lng = nil
  if params[:address].nil? || params[:address].strip == ''
    lat = params[:ll].split(',')[0]
    lng = params[:ll].split(',')[1]
  end
  url = "#{API_HOST}#{SEARCH_PATH}"
  radius = params[:radius].to_i * 1609
  if radius > 40000
    radius = 40000
  end
  search_params = {
    term: params[:term],
    location: params[:address],
    limit: 50,
    latitude: lat,
    longitude: lng,
    price: price_string,
    radius: radius,
    categories: 'restaurants'
  }
  response = HTTP.auth(bearer_token).get(url, params: search_params)
  if response.parse['businesses']
    businesses = response.parse['businesses'].shuffle.to_json
  end
  businesses.to_json
end
