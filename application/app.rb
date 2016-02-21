require 'bundler'
Bundler.require

class App<Sinatra::Base

	configure do
		set :views, 'application/views'
		set :public_folder, 'public'
	end

	get '/' do
		erb :index
	end
end