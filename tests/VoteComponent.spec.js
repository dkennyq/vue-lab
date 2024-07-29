import { shallowMount } from "@vue/test-utils";
import VoteComponent from "@components/VoteComponent.vue";
import { describe, it, expect } from "jest"; // or "jest" if you are using Jest

const title = "Vote Component"; // Define the title variable

describe("VoteComponent.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(VoteComponent);
    expect(wrapper.text()).toMatch(title);
  });

  it("calculates thumbs up percentage correctly", async () => {
    const wrapper = shallowMount(VoteComponent, {
      props: {
        thumbsUp: 10,
        thumbsDown: 5,
      },
    });

    expect(wrapper.vm.thumbsUpPercentage).toBe("66.7");
    expect(wrapper.vm.thumbsDownPercentage).toBe("33.3");
  });

  it("updates thumbs up when button clicked", async () => {
    const wrapper = shallowMount(VoteComponent, {
      props: {
        thumbsUp: 10,
        thumbsDown: 5,
      },
    });

    await wrapper.find("button:first-of-type").trigger("click");
    expect(wrapper.vm.currentRatingUp).toBe(11);
    expect(wrapper.vm.thumbsUpPercentage).toBe("68.8");
    expect(wrapper.vm.thumbsDownPercentage).toBe("31.2");
  });
});
