# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  name: "Leia",
  pic: "https://rlv.zcache.com/happy_smiley_face_round_stickers-rbdcd90a58b8e40a9b895e7c2fd1e65ef_v9waf_8byvr_324.jpg",
  place_id: 1,
  friend_id: 2
)

User.create(
  name: "Vicky",
  pic: "http://2.bp.blogspot.com/-qdtzy_7PEG4/U5f2GFtaSZI/AAAAAAAAIs0/-2xe5Xj8s_I/s1600/girl-smiley-face.png",
  place_id: 1,
  friend_id: 1
)

User.create(
  name: "Ryan",
  pic: "http://4.bp.blogspot.com/-e98D9RG3Gzs/U5XAgtaj9tI/AAAAAAAAIIo/hDPgyrWvxy0/s1600/shy-smiley.png",
  place_id: 1,
  friend_id: 2
)

User.create(
  name: "Grace",
  pic: "https://s-media-cache-ak0.pinimg.com/originals/e1/38/a1/e138a174c33a48931521dcc5639d4a03.png",
  place_id: 2,
  friend_id: 3
)

User.create(
  name: "Steven",
  pic: "http://i.dailymail.co.uk/i/pix/2017/02/03/14/3CCCD62500000578-4188288-The_smiley_face_emoji-a-78_1486131392673.jpg",
  place_id: 2,
  friend_id: 3
)

User.create(
  name: "Doug",
  pic: "https://rlv.zcache.com/happy_smiley_face_blue_classic_round_sticker-rf7a3228bdca6470e8913a7147bfa5c9b_v9waf_8byvr_324.jpg",
  place_id: 3,
  friend_id: 4
)

User.create(
  name: "Chad",
  pic: "https://s-media-cache-ak0.pinimg.com/736x/42/d9/37/42d9373a19d4094c55b7dd80c37ed319--emoji-emoticons-emojis.jpg",
  place_id: 4,
  friend_id: 5
)


Place.create(
  name: "Montana"
)

Place.create(
  name: "Texas"
)

Place.create(
  name: "New York"
)

Place.create(
  name: "California"
)
