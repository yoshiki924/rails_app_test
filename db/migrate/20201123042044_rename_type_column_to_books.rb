class RenameTypeColumnToBooks < ActiveRecord::Migration[6.0]
  def change
    rename_column :books, :type, :book_type
  end
end
