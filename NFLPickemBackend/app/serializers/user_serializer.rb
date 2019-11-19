class UserSerializer < ActiveModel::Serializer
  has_many :picksheets
  attributes :id

end
