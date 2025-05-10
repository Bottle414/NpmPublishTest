// Button.test.ts
// import { render, fireEvent } from '@testing-library/vue'
import { nextTick } from 'vue'
import Button from '../components/Button.vue'
import { mount } from '@vue/test-utils'
// import { vi, describe, test, expect, afterEach } from 'vitest'

// 提示：多组测试共用一个实例可能会导致组件状态变化，测试逻辑会变得复杂
// 以下的写法极不规范。建议describe同时执行多个测试，每个测试单独享有内部的实例
const wrapper = mount(Button, {
  props: {
    color: 'red'
  },
  slots: {
    default: 'hi',
    dom: "<div id='test'>Test</div>"
  }
})

test('change button text-color to red', () => {
  expect(wrapper.attributes('style')).toBe('color: red;')
  expect(wrapper.text()).toContain('hi')
  expect(wrapper.find('#hi').exists()).toBe(false)
})

test('click button make count 0 to be 1', async() => {
  wrapper.find('button').trigger('click')
  await nextTick()
  expect(wrapper.html()).toContain(1)
})

// import { cleanup } from '@testing-library/vue'

// afterEach(() => {
//   cleanup()
// })


// describe('Button', () => {
//     test('renders button with slot text', () => {
//         const { getByText } = render(Button, {// 把组件挂载到一个虚拟dom上来进行操作
//           slots: {// 插槽内容
//             default: 'Click Me',// 和边上的文字连起来了它就查不到，需要自己用正则写回调
//           },
//           props: {
//               color: 'red'
//           }
//         })
//         getByText('Click Me')// 查找文字, 找不到这几个字就会报错
//     })

//     test('calls click handler', async () => {
//         const handleClick = vi.fn()
//         const { getByRole } = render(Button, {
//           attrs: {
//             onClick: handleClick,
//           },
//         })
//         await fireEvent.click(getByRole('button'))
//         expect(handleClick).toHaveBeenCalled()// 检查点击事件回调是否被触发
//       })
      
// })