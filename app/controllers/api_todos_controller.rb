class ApiTodosController < BaseApiController
  before_action :set_todo, only: [:show, :edit, :update, :destroy]

  # GET /todos
  # GET /todos.json
  def index
    @todos = current_user.todos.all
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
  end

  # POST /todos
  # POST /todos.json
  def create    
    @todo = Todo.new(todo_params)

	if @todo.save
	  render :show, status: :created
	else
	  render json: @todo.errors, status: :unprocessable_entity
	end

  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    if @todo.update(todo_params)
      render :show, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
    	@todo = current_user.todos.where("id = ?", params[:id]).first
    	verify_existance(@todo)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def todo_params
      filtered_params = { :user_id => current_user.id }

      if @json.has_key?("task")
        filtered_params[:task] = @json["task"]
        return filtered_params
      else
        render json: [], status: :bad_request
      end
    end
end
