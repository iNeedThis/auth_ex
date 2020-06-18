defmodule Auth.AccountsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Auth.Accounts` context.
  """

  def unique_user_email, do: "user#{System.unique_integer()}@example.com"
  def unique_user_name, do: "user#{System.unique_integer()}"
  def valid_user_password, do: "hello world!"

  def user_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        name: unique_user_name(),
        email: unique_user_email(),
        password: valid_user_password()
      })
      |> Auth.Accounts.register_user()

    user
  end

  def extract_user_token(fun) do
    {:ok, captured} = fun.(&"[TOKEN]#{&1}[TOKEN]")
    [_, token, _] = String.split(captured.body, "[TOKEN]")
    token
  end
end
