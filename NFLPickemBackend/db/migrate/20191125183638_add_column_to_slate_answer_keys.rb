class AddColumnToSlateAnswerKeys < ActiveRecord::Migration[5.1]
  def change
    add_column :slate_answer_keys, :winner1, :string
    add_column :slate_answer_keys, :winner2, :string
    add_column :slate_answer_keys, :winner3, :string
    add_column :slate_answer_keys, :winner4, :string
    add_column :slate_answer_keys, :winner5, :string
    add_column :slate_answer_keys, :winner6, :string
    add_column :slate_answer_keys, :winner7, :string
  end
end
