import App from "@/App.vue"
import { shallowMount } from "@vue/test-utils"
import { expect } from "chai"

describe("App.vue", () => {
  it("ボタンを押したときにカウントされることを確認する", () => {
    const wrapper = shallowMount(App, {
    })
    const span = wrapper.find("span")
    // console.log(span.text())
    expect(span.text()).equal("0")

    const button = wrapper.find("button")
    button.trigger("click")
    // console.log(span.text())
    expect(span.text()).equal("1")
  })
})
