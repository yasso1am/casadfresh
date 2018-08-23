class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :reservations
  has_many :guestbooks

  validates :email, :first_name, :last_name, :phone, presence: true
  validates :email, uniqueness: { case_sensitive: true }

  

end
