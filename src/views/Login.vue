<template>
  <div id="login">
    <img class="logo" src="@/assets/images/prime-video-brand.svg" alt="Logo" />

    <em class="sub-message">Welcome to Prime Video</em>
    <span class="message">Get Started.</span>

    <v-btn class="btn-singup">Sign up</v-btn>
    <a class="link">Sign in</a>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped>
@import "@/styles/Variables.scss";
@import "@/styles/Objects.scss";
#login {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding-bottom: 68px;
  background: $color-background;

  > .logo {
    height: 114px;
    width: 124px;
  }

  > .sub-message {
    margin-top: 8rem;
    margin-bottom: 0.4rem;
    color: $color-text2;
    font-weight: 300;
    line-height: initial;
  }

  > .message {
    color: $color-text;
    font-size: 4rem;
    font-weight: 300;
    line-height: initial;
  }

  > .btn-singup {
    @extend %primary-button;
    margin-top: 11.4rem;
    margin-bottom: 1.6rem;
    width: 295px;
    height: 56px;
  }

  > .link {
    color: $color-primary;
    font-weight: 700;
    letter-spacing: normal;
    text-decoration: underline;
    text-transform: capitalize;
  }
}
</style>
