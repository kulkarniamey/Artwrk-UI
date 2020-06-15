#!/usr/bin/env python3

from aws_cdk import core

from artwrk_ui.artwrk_ui_stack import ArtwrkUiStack


app = core.App()
ArtwrkUiStack(app, "artwrk-ui")

app.synth()
