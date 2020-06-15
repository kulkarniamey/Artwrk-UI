from aws_cdk import (
    aws_s3 as s3,
    aws_s3_deployment as s3deploy,
    core
)

class ArtwrkUiStack(core.Stack):

    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # The code that defines your stack goes here
        buckets={}
        buckets["refs/heads/master"] = s3.Bucket(self, "artwrk.prod",
            website_index_document="index.html",
            public_read_access=True
        )
        buckets["refs/heads/develop"] = s3.Bucket(self, "artwrk.dev",
            website_index_document="index.html",
            public_read_access=True
        )

        s3deploy.BucketDeployment(self, "DeployWebsite",
            sources=[s3deploy.Source.asset("webapp/dist")],
            destination_bucket=buckets[self.node.try_get_context("branch")],
            destination_key_prefix=""
        )