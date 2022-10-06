describe("The Login page", () => {
  // beforeEach(() => {
  //   // reset and seed the database prior to every test
  //   cy.exec("npm run db:reset && npm run db:seed");
  // });

  it("successfully loads", () => {
    cy.visit("/");
    cy.get("#email", {
      timeout: 5000,
    }).should("be.visible");
    cy.contains(".style_heading__MuXWa", "ログイン");
    cy.contains(
      ":nth-child(2) > .ant-form-item-label > .ant-form-item-required",
      "メールアドレス"
    );
    cy.contains(
      ".ant-row.mb-20 > .ant-form-item-label > .ant-form-item-required",
      "パスワード"
    );
    cy.contains(".ant-btn > span", "ログイン");
    cy.get("#email").type("man@gmail.com");
    cy.get("#password").type("123456");
    cy.get(".ant-btn").click();
    cy.url().should("include", "dashboard");
  });
});
