workspace(name = "shared_red_node_library")

http_archive(
    name = "build_bazel_rules_typescript",
    url = "https://github.com/bazelbuild/rules_typescript/archive/0.20.3.zip",
    strip_prefix = "rules_typescript-0.20.3",
)

# Fetch our Bazel dependencies that aren't distributed on npm
load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")
rules_typescript_dependencies()

# Setup TypeScript toolchain
load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")
ts_setup_workspace()

# Setup the NodeJS toolchain
load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")
node_repositories()

# Setup Bazel managed npm dependencies with the `yarn_install` rule.
# The name of this rule should be set to `npm` so that `ts_library` and `ts_web_test_suite`
# can find your npm dependencies by default in the `@npm` workspace. You may
# also use the `npm_install` rule with a `package-lock.json` file if you prefer.
# See https://github.com/bazelbuild/rules_nodejs#dependencies for more info.
yarn_install(
  name = "npm",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock",
)

# Setup Go toolchain
load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")
go_rules_dependencies()
go_register_toolchains()