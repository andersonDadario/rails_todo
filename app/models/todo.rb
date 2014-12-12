class Todo < ActiveRecord::Base
  belongs_to :user

  validates :task, presence: :true, length: { in: 1..255 }
  validates :user_id, presence: :true, numericality: { only_integer: true }
end
