pub fn main() {
  hello()
}

@external(javascript, "./ffi_hello.ts", "hello")
fn hello() -> Nil
