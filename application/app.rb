require 'bundler'
Bundler.require
require 'tilt 2.0.4'

class App<Sinatra::Base

	configure do
		set :views, 'application/views'
		set :public_folder, 'public'
	end

	get '/' do
		erb :index
	end
end