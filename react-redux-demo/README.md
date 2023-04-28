## React-Redux

react-redux 就是 Redux 官方出的，用于配合 React 的绑定库

react-redux 能够使你的 React 组件从 React store 很方便的读取数据，并且 store 中分发 action 来更新数据

### React-Redux 中两个重要成员

#### Provider 组件

这个组件能够使你整个在 Provider 中的子组件都能够获取 store 中的数据
Provider接收store作为props，通过context往下传递，Provider包裹的任何子组件都可以
通过context获取store

解决的问题
容器组件可能存在很深的层级，防止了一层一层去传递state

作用
让子组件拿到state

原理
react中context

#### connect 方法

这个方法能够使组件跟store来进行关联

Provider内部组件如果想要使用state，就必须要connect进行一层包裹封装，
即需要使用connect进行加强

connect方便组件能够获取到store中的state


