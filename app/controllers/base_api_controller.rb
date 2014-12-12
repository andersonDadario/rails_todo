class BaseApiController < ApplicationController
	before_filter :parse_request

	private

		def verify_existance(query)
			unless query
				render json: {}, status: :not_found
			end
		end

		def validate_json(condition)
			unless condition
				render nothing: true, status: :bad_request
			end
		end

	   	def parse_request
	   		@json = nil
	   		if ["POST","PUT"].include? request.method
	   			begin
	   				@json = JSON.parse(request.body.read)
	   			rescue JSON::ParserError
	   				head :bad_request
	   			end
	   		end
	   	end
end