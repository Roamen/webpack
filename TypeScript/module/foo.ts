// 全局作用域是比较危险的
const foo: string = 'tadpole'
// 我们可以将其创建为一个本地作用域
// export 关键字会影响整个文件的作用域
export const foo1: string = 'tadpole'

export const foo2: string = 'ltadpole'

// 文件检查的路径

/*
 ./node_modules
 ../node_modules
 ../../node_modules
 直到项目根路径 
 */
