// "快速排序"的思想很简单， 整个排序过程只需要三步

// * 在数据集之中，选择一个元素作为 "基准"（pivot）
// * 所有小于"基准"的元素， 都移到"基准"的左边；所有大于"基准"的元素，都移到 "基准"的右边。
// * 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

// 基本实现（ 需O(n)的额外空间开销 ）

function quickSort(arr){
    if(arr.length<2) return arr
    let pivot = arr.pop()
    let left = []
    let right = []

    // for(let i = 0;i<arr.length;i++){
    //     arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    // }

    // 函数式编程
    arr.forEach(element => {
        element < pivot ? left.push(element) : right.push(element)
    });

    // concat方法可接受多个数组参数，并按从左到右的顺序进行拼接
    return quickSort(left).concat([pivot],quickSort(right))
}

// 上面的这个写法其实不是非常正规的快排，因为快排的其中一个特点就是原地处理，这也是它与归并排序相比的优势所在

// In-Place实现(一)

function quickSort1(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivot = partition(arr, left, right)
        quickSort1(arr, left, pivot - 1)
        quickSort1(arr, pivot + 1, right)
    }
    return arr

    function swap(arr, a, b) {
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }

    function partition(arr, left, right) {

        let pivot = arr[right] // 选择数组最后一位作为pivot
        let i = left
        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                swap(arr, i, j)
                i++
            }
        }
        swap(arr, i, right) //将 pivot 值移至中间

        return i
    }
}

// 如果想要优化pivot的选取，则可以优化partition分区函数
// In-Place实现(二)
function quickSort2(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivot = partition(arr, left, right)
        quickSort2(arr, left, pivot - 1)
        quickSort2(arr, pivot, right)
    }
    return arr

    function swap(arr, a, b) {
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }

    function partition(arr, left, right) {
        let pivot = arr[Math.floor((left + right) / 2)] // 选择数组中间一位作为pivot
        while (left <= right) {
            while (arr[left] < pivot) {
                left++
            }
            while (arr[right] > pivot) {
                right--
            }
            if (left <= right) {
                swap(arr,left,right)
                left++
                right--
            }
        }
        return left
    }
}

let arr = [65, 7, 35, 9, 10, 30, 20, 31, 24, 60, 91, 65, 77, 81, 96]

console.log(quickSort(arr))
console.log(quickSort1(arr))
console.log(quickSort2(arr))