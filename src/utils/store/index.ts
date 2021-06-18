import { writable } from 'svelte/store';

export const store = writable({
    userInfo: {
        name: "张三",
        age: 24,
    }
});

export default store;
