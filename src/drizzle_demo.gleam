pub fn main() {
  hello()
}

@external(javascript, "./ffi_hello.mjs", "hello")
fn hello() -> Nil
