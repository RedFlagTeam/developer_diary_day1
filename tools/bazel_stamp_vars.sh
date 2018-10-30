#!/usr/bin/env bash
BUILD_SCM_VERSION=$(git describe --abbrev=7 --tags HEAD)
echo BUILD_SCM_VERSION ${BUILD_SCM_VERSION}
