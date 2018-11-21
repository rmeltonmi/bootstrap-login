<template>
  <div>
    <div class="container">
      <h2 class="text-center">Entity Name</h2>
      <div class="row  ">
        <div class="col-lg-6 col-12 mx-auto">
          <div class="card h-100 ">
            <div class="card-body">
              <h1>Login</h1>
              <form role="form">
                <div class="form-group">
                  <label for="inputEmailForm" class="sr-only form-control-label"
                    >Email</label
                  >
                  <div class="mx-auto col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmailForm"
                      placeholder="email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label
                    for="inputPasswordForm"
                    class="sr-only form-control-label"
                    >Password</label
                  >
                  <div class="mx-auto col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="inputPasswordForm"
                      placeholder="password"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="mx-auto col-sm-10">
                    <div
                      class="checkbox form-control form-control-sm text-center small"
                    >
                      <label class=""
                        ><input type="checkbox" class="" /> remember me</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="mx-auto col-sm-10 pb-3 pt-2">
                    <button
                      type="submit"
                      class="btn btn-outline-secondary btn-lg btn-block"
                    >
                      Sign-in
                    </button>
                  </div>
                </div>
              </form>
              <div class="text-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col"><div class="text-center"></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped></style>
