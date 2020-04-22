class AddColumnUsersCommentToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :users_comment, :text
  end
end
