resource "aws_vpc" "server_vpc" {
  cidr_block = "10.0.0.0/20"

  enable_dns_hostnames = true

  tags = {
    name = "server"
  }
}

resource "aws_subnet" "server_public_1a" {
  vpc_id     = aws_vpc.server_vpc.id
  cidr_block = "10.0.0.0/24"
  availability_zone = "us-east-1a"

  tags = {
    name = "server-public-1a"
  }
}

resource "aws_subnet" "server_private_1a" {
  vpc_id     = aws_vpc.server_vpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-1a"

  tags = {
    name = "server-private-1a"
  }
}

resource "aws_subnet" "server_public_1b" {
  vpc_id     = aws_vpc.server_vpc.id
  cidr_block = "10.0.2.0/24"
  availability_zone = "us-east-1b"

  tags = {
    name = "server-public-1b"
  }
}

resource "aws_subnet" "server_private_1b" {
  vpc_id     = aws_vpc.server_vpc.id
  cidr_block = "10.0.3.0/24"
  availability_zone = "us-east-1b"

  tags = {
    name = "server-private-1b"
  }
}

resource "aws_internet_gateway" "server_ig" {
  vpc_id = aws_vpc.server_vpc.id

  tags = {
    name = "server_ig"
  }
}

resource "aws_route_table" "server_public_rt" {
  vpc_id = aws_vpc.server_vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.server_ig.id
  }

  tags = {
    name = "server_public_rt"
  }
}

resource "aws_route_table" "server_private_rt" {
  vpc_id = aws_vpc.server_vpc.id

  tags = {
    name = "server_private_rt"
  }
}

resource "aws_route_table_association" "server_public_1a_assc" {
  subnet_id      = aws_subnet.server_public_1a.id
  route_table_id = aws_route_table.server_public_rt.id
}

resource "aws_route_table_association" "server_public_1b_assc" {
  subnet_id      = aws_subnet.server_public_1b.id
  route_table_id = aws_route_table.server_public_rt.id
}

resource "aws_route_table_association" "server_private_1a_assc" {
  subnet_id      = aws_subnet.server_private_1a.id
  route_table_id = aws_route_table.server_private_rt.id
}

resource "aws_route_table_association" "server_private_1b_assc" {
  subnet_id      = aws_subnet.server_private_1b.id
  route_table_id = aws_route_table.server_private_rt.id
}