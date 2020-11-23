class AddTypeToBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :type, :integer
  end
end
