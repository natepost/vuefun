class CreatePhrases < ActiveRecord::Migration[5.2]
  def change
    create_table :phrases do |t|
      t.references :greeting, foreign_key: true
      t.string :name
      t.integer :position

      t.timestamps
    end
  end
end
