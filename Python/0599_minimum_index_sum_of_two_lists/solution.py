def minimum_index_sum_of_two_lists(list1,list2):
    check_index_sum = dict()
    for word in list1:
        if word in list2:
            if word not in check_index_sum:
                check_index_sum[word] = list1.index(word) + list2.index(word)
    find_minimum = check_index_sum.values()
    result = list()
    for key,value in check_index_sum.items():
        if value == min(find_minimum):
            result.append(key)
    return result    

list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
print(minimum_index_sum_of_two_lists(list1,list2))