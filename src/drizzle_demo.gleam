pub fn main() {
  sm()
}

@external(javascript, "./ffi_drizzle_demo.js", "sm")
fn sm() -> Nil
