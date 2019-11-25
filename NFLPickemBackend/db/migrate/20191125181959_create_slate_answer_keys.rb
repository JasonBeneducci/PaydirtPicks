class CreateSlateAnswerKeys < ActiveRecord::Migration[5.1]
  def change
    create_table :slate_answer_keys do |t|

      t.timestamps
    end
  end
end
