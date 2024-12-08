// tests/todo.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi, flushPromises } from 'vitest'
import App from '@/App.vue'
import axios from 'axios'

vi.mock('axios')

describe('To Do List', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(App)
  })

  it('should add a new task to the list', async () => {
    await wrapper.find('input').setValue('buy some milk')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('li').text()).toContain('buy some milk')
  })

  it('should insert a new task below the existing one', async () => {
    await wrapper.find('input').setValue('buy some milk')
    await wrapper.find('button').trigger('click')
    await wrapper.find('input').setValue('enjoy the assignment')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const todoItems = wrapper.findAll('li')
    expect(todoItems.at(0).text()).toContain('enjoy the assignment')
    expect(todoItems.at(1).text()).toContain('buy some milk')
  })

  it('should mark a task as completed', async () => {
    await wrapper.find('input').setValue('buy some milk')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.find('span').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('span').classes()).toContain('completed')
  })

  it('should clear the mark of a completed task', async () => {
    await wrapper.find('input').setValue('buy some milk')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.find('span').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.find('span').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('span').classes()).not.toContain('completed')
  })

  it('should delete a task from the list', async () => {
    await wrapper.find('input').setValue('rest for a while')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.find('input').setValue('drink water')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.findAll('button').at(1).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('li').text()).not.toContain('drink water')
  })
  
  it('should delete a specific task from the list', async () => {
    await wrapper.find('input').setValue('rest for a while')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.find('input').setValue('drink water')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.find('input').setValue('rest for a while')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.find('input').setValue('drink milk')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.findAll('button').at(1).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li').at(0).text()).not.toContain('drink water')
  })
})