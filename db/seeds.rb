# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: "test", password: "password"})

titles = %w{Interesting Terrific Information}

titles.each_with_index do |title, i|
  Gist.create({
    title: title,
    user_id: 1
  })

  if i % 2 == 0
    Favorite.create({
      user_id: 1,
      gist_id: i + 1
    })
  end
end