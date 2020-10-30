def registration(array)
  hash = {}
  puts "氏名を入力してください"
  hash[:name]=gets.chomp
  puts "年齢を入力してください"
  hash[:age]=gets.to_i
  puts "居住する都道府県を入力してください"
  hash[:address]=gets.chomp
  array << hash
end

def all_users(array)
  index = 0
  array.each do |hash|
    puts "-------------------------------"
    puts "ユーザー氏名#{index} #{hash[:name]}"
    puts "-------------------------------"
    index += 1
  end
  puts "見たいユーザーの番号を選択してください"
  num = gets.to_i
  show_user(array[num])
end

def show_user(user)
  puts "名前:#{user[:name]}"
  puts "年齢#{user[:age]}"
  puts "住居地#{user[:address]}"
end

users = []

while true do
  puts ("
  -------------------------------
  行う操作を選んでください\n
  [0] ユーザーを登録する
  [1] ユーザー氏名一覧を見る
  [2] 終了する
  -------------------------------
  ")
  num = gets.to_i
  if num == 0
    registration(users)
  elsif num == 1
    all_users(users)
  elsif num == 2
    exit
  else
    puts "無効な値です"
  end
end