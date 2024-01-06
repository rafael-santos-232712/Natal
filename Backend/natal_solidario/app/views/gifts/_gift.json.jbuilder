json.extract! gift, :id, :title, :description, :user_id, :created_at, :updated_at
json.url gift_url(gift, format: :json)
