export default function debounce (fn, delay) {
    let timeout;
    return wrapper
    function wrapper (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}