class PicksheetSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id
end
