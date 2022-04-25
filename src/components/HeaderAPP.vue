<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">5mis Pottery</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" exact>
                <a class="nav-link active" aria-current="page"
                  >Home</a
                ></router-link
              >
            </li>

            <li class="nav-item">
              <router-link to="/model"
                ><a class="nav-link">Model</a></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
