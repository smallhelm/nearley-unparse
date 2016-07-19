main -> foo | bar_list

foo -> [a-zA-Z]:+

bar_list -> bar
    | bar_list "," bar

bar -> "bar"
