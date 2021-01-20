<script lang="ts">
  import { Link } from "svelte-routing";

  // core components
  import IndexNavbar from "components/Navbars/IndexNavbar.svelte";
  import Footer from "components/Footers/Footer.svelte";

  const patternVue = "/assets/img/pattern_svelte.png";
  const componentBtn = "/assets/img/component-btn.png";
  const componentProfileCard = "/assets/img/component-profile-card.png";
  const componentInfoCard = "/assets/img/component-info-card.png";
  const componentInfo2 = "/assets/img/component-info-2.png";
  const componentMenu = "/assets/img/component-menu.png";
  const componentBtnPink = "/assets/img/component-btn-pink.png";
  const documentation = "/assets/img/documentation.png";
  const login = "/assets/img/login.jpg";
  const profile = "/assets/img/profile.jpg";
  const landing = "/assets/img/landing.jpg";
  export const location = '';
</script>

<IndexNavbar />
<section class="relative flex items-center h-screen pt-16 header max-h-860-px">
  <div class="container flex flex-wrap items-center mx-auto">
    <div class="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
      <div class="pt-32 sm:pt-0">
        <h2 class="text-4xl font-semibold text-gray-700">
          Notus Svelte - A beautiful extension for Tailwind CSS.
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-gray-600">
          Notus Svelte is Free and Open Source. It does not change or
          add any CSS to the already one from
          <a
            href="https://tailwindcss.com/?ref=creativetim"
            class="text-gray-700"
            target="_blank"
          >
            Tailwind CSS
          </a>
          . It features multiple HTML elements and it comes with dynamic
          components for ReactJS, Vue and Angular.
        </p>
        <div class="mt-12">
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index"
            target="_blank"
            class="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none get-started focus:outline-none active:bg-red-600 hover:shadow-lg"
          >
            Get started
          </a>
          <a
            href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index"
            class="px-6 py-4 mb-1 ml-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-gray-800 rounded shadow outline-none github-star focus:outline-none active:bg-gray-700 hover:shadow-lg"
            target="_blank"
          >
            Github Star
          </a>
        </div>
      </div>
    </div>
  </div>

  <img
    class="absolute top-0 right-0 w-10/12 pt-16 -mt-48 b-auto sm:w-6/12 sm:mt-0 max-h-860-px"
    src="{patternVue}"
    alt="..."
  />
</section>

<section class="relative pb-40 mt-48 bg-gray-200 md:mt-40">
  <div
    class="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
    style="transform: translateZ(0);"
  >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        class="text-gray-200 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
  <div class="container mx-auto">
    <div class="flex flex-wrap items-center">
      <div
        class="w-10/12 px-12 ml-auto mr-auto -mt-32 md:w-6/12 lg:w-4/12 md:px-4"
      >
        <div
          class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white bg-red-500 rounded-lg shadow-lg"
        >
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            class="w-full align-middle rounded-t-lg"
          />
          <blockquote class="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              class="absolute left-0 block w-full h-95-px -top-94-px"
            >
              <polygon
                points="-30,95 583,95 583,65"
                class="text-red-500 fill-current"
              ></polygon>
            </svg>
            <h4 class="text-xl font-bold text-white">
              Great for your awesome project
            </h4>
            <p class="mt-2 font-light text-white text-md">
              Putting together a page has never been easier than matching
              together pre-made components. From landing pages presentation to
              login areas, you can easily customise and built your pages.
            </p>
          </blockquote>
        </div>
      </div>

      <div class="w-full px-4 md:w-6/12">
        <div class="flex flex-wrap">
          <div class="w-full px-4 md:w-6/12">
            <div class="relative flex flex-col mt-4">
              <div class="flex-auto px-4 py-5">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-gray-600 bg-white rounded-full shadow-lg"
                >
                  <i class="fas fa-sitemap"></i>
                </div>
                <h6 class="mb-1 text-xl font-semibold">
                  CSS Components
                </h6>
                <p class="mb-4 text-gray-600">
                  Notus Svelte comes with a huge number of Fully Coded CSS
                  components.
                </p>
              </div>
            </div>
            <div class="relative flex flex-col min-w-0">
              <div class="flex-auto px-4 py-5">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-gray-600 bg-white rounded-full shadow-lg"
                >
                  <i class="fas fa-drafting-compass"></i>
                </div>
                <h6 class="mb-1 text-xl font-semibold">
                  JavaScript Components
                </h6>
                <p class="mb-4 text-gray-600">
                  We also feature many dynamic components for React, NextJS, Vue
                  and Angular.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-6/12">
            <div class="relative flex flex-col min-w-0 mt-4">
              <div class="flex-auto px-4 py-5">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-gray-600 bg-white rounded-full shadow-lg"
                >
                  <i class="fas fa-newspaper"></i>
                </div>
                <h6 class="mb-1 text-xl font-semibold">Pages</h6>
                <p class="mb-4 text-gray-600">
                  This extension also comes with 3 sample pages. They are fully
                  coded so you can start working instantly.
                </p>
              </div>
            </div>
            <div class="relative flex flex-col min-w-0">
              <div class="flex-auto px-4 py-5">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-gray-600 bg-white rounded-full shadow-lg"
                >
                  <i class="fas fa-file-alt"></i>
                </div>
                <h6 class="mb-1 text-xl font-semibold">
                  Documentation
                </h6>
                <p class="mb-4 text-gray-600">
                  Built by developers for developers. You will love how easy is
                  to to work with Notus Svelte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container pb-20 mx-auto overflow-hidden">
    <div class="flex flex-wrap items-center">
      <div class="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
        <div
          class="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-white rounded-full shadow-lg"
        >
          <i class="text-xl fas fa-sitemap"></i>
        </div>
        <h3 class="mb-2 text-3xl font-semibold leading-normal">
          CSS Components
        </h3>
        <p class="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
          Every element that you need in a product comes built in as a
          component. All components fit perfectly with each other and can have
          different colours.
        </p>
        <div class="block pb-6">
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Buttons
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Inputs
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Labels
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Menus
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Navbars
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Pagination
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Progressbars
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Typography
          </span>
        </div>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index"
          target="_blank"
          class="font-bold text-gray-800 transition-all duration-150 ease-linear hover:text-gray-600"
        >
          View All
          <i class="ml-1 leading-relaxed fa fa-angle-double-right"></i>
        </a>
      </div>

      <div class="w-full px-4 mt-32 ml-auto mr-auto md:w-5/12">
        <div class="relative flex flex-col w-full min-w-0 mt-48 mb-6 md:mt-0">
          <img
            alt="..."
            src="{componentBtn}"
            class="absolute w-full align-middle rounded shadow-lg max-w-100-px left-145-px -top-29-px z-3"
          />
          <img
            alt="..."
            src="{componentProfileCard}"
            class="absolute w-full align-middle rounded-lg shadow-lg max-w-210-px left-260-px -top-160-px"
          />
          <img
            alt="..."
            src="{componentInfoCard}"
            class="absolute w-full align-middle rounded-lg shadow-lg max-w-180-px left-40-px -top-225-px z-2"
          />
          <img
            alt="..."
            src="{componentInfo2}"
            class="absolute w-full align-middle rounded-lg shadow-2xl max-w-200-px -left-50-px top-25-px"
          />
          <img
            alt="..."
            src="{componentMenu}"
            class="absolute w-full align-middle rounded shadow-lg max-w-580-px -left-20-px top-210-px"
          />
          <img
            alt="..."
            src="{componentBtnPink}"
            class="absolute w-full align-middle rounded shadow-xl max-w-120-px left-195-px top-95-px"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-center pt-32">
      <div class="w-full px-4 mt-32 ml-auto mr-auto md:w-6/12">
        <div class="relative flex flex-wrap justify-center">
          <div class="w-full px-4 my-4 lg:w-6/12">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div
                class="p-8 text-center bg-red-600 rounded-lg shadow-lg"
              >
                <img
                  alt="..."
                  class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                />
                <p class="mt-4 text-lg font-semibold text-white">
                  Svelte
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div class="p-8 mt-8 text-center bg-blue-500 rounded-lg shadow-lg">
                <img
                  alt="..."
                  class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                />
                <p class="mt-4 text-lg font-semibold text-white">
                  ReactJS
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div
                class="p-8 mt-8 text-center bg-gray-800 rounded-lg shadow-lg"
              >
                <img
                  alt="..."
                  class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                />
                <p class="mt-4 text-lg font-semibold text-white">
                  NextJS
                </p>
              </div>
            </a>
          </div>
          <div class="w-full px-4 my-4 lg:w-6/12 lg:mt-16">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div class="p-8 text-center bg-yellow-500 rounded-lg shadow-lg">
                <img
                  alt="..."
                  class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                />
                <p class="mt-4 text-lg font-semibold text-white">
                  JavaScript
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div class="p-8 mt-8 text-center bg-red-700 rounded-lg shadow-lg">
                <img
                  alt="..."
                  class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                />
                <p class="mt-4 text-lg font-semibold text-white">
                  Angular
                </p>
              </div>
            </a>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=ns-index"
              target="_blank"
            >
              <div
                class="p-8 mt-8 text-center bg-green-500 rounded-lg shadow-lg"
              >
                <img
                  alt="..."
                  class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                />
                <p class="mt-4 text-lg font-semibold text-white">
                  Vue.js
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
        <div
          class="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-white rounded-full shadow-lg"
        >
          <i class="text-xl fas fa-drafting-compass"></i>
        </div>
        <h3 class="mb-2 text-3xl font-semibold leading-normal">
          Javascript Components
        </h3>
        <p class="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
          In order to create a great User Experience some components require
          JavaScript. In this way you can manipulate the elements on the page
          and give more options to your users.
        </p>
        <p class="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
          We created a set of Components that are dynamic and come to help you.
        </p>
        <div class="block pb-6">
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Alerts
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Dropdowns
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Menus
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Modals
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Navbars
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Popovers
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Tabs
          </span>
          <span
            class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-600 uppercase bg-white rounded-full last:mr-0"
          >
            Tooltips
          </span>
        </div>
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index"
          target="_blank"
          class="font-bold text-gray-800 transition-all duration-150 ease-linear hover:text-gray-600"
        >
          View all
          <i class="ml-1 leading-relaxed fa fa-angle-double-right"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="container px-4 pt-48 pb-32 mx-auto">
    <div class="flex flex-wrap items-center">
      <div class="w-full px-12 ml-auto md:w-5/12 md:px-4">
        <div class="md:pr-12">
          <div
            class="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-white rounded-full shadow-lg"
          >
            <i class="text-xl fas fa-file-alt"></i>
          </div>
          <h3 class="text-3xl font-semibold">
            Complex Documentation
          </h3>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            This extension comes a lot of fully coded examples that help you get
            started faster. You can adjust the colors and also the programming
            language. You can change the text and images and you're good to go.
          </p>
          <ul class="mt-6 list-none">
            <li class="py-2">
              <div class="flex items-center">
                <div>
                  <span
                    class="inline-block px-2 py-1 mr-3 text-xs font-semibold text-gray-600 uppercase bg-gray-100 rounded-full"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </span>
                </div>
                <div>
                  <h4 class="text-gray-600">
                    Built by Developers for Developers
                  </h4>
                </div>
              </div>
            </li>
            <li class="py-2">
              <div class="flex items-center">
                <div>
                  <span
                    class="inline-block px-2 py-1 mr-3 text-xs font-semibold text-gray-600 uppercase bg-gray-100 rounded-full"
                  >
                    <i class="fab fa-html5"></i>
                  </span>
                </div>
                <div>
                  <h4 class="text-gray-600">
                    Carefully crafted code for Components
                  </h4>
                </div>
              </div>
            </li>
            <li class="py-2">
              <div class="flex items-center">
                <div>
                  <span
                    class="inline-block px-2 py-1 mr-3 text-xs font-semibold text-gray-600 uppercase bg-gray-100 rounded-full"
                  >
                    <i class="far fa-paper-plane"></i>
                  </span>
                </div>
                <div>
                  <h4 class="text-gray-600">
                    Dynamic Javascript Components
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full px-4 pt-24 mr-auto md:w-6/12 md:pt-0">
        <img
          alt="..."
          class="max-w-full rounded-lg shadow-xl"
          style="
            transform: scale(1) perspective(1040px) rotateY(-11deg)
              rotateX(2deg) rotate(2deg);
          "
          src="{documentation}"
        />
      </div>
    </div>
  </div>

  <div class="flex flex-wrap justify-center mt-24 text-center">
    <div class="w-full px-12 md:w-6/12 md:px-4">
      <h2 class="text-4xl font-semibold">Beautiful Example Pages</h2>
      <p class="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
        Notus Svelte is a completly new product built using our past
        experience in web templates. Take the examples we made for you and start
        playing with them.
      </p>
    </div>
  </div>
</section>

<section class="relative block bg-gray-700 z-1">
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-center">
      <div class="w-full px-4 -mt-24 lg:w-12/12">
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-4/12">
            <h5 class="pb-4 text-xl font-semibold text-center">
              Login Page
            </h5>
            <Link to="/auth/login">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
              >
                <img
                  alt="..."
                  class="h-auto max-w-full align-middle border-none rounded-lg"
                  src="{login}"
                />
              </div>
            </Link>
          </div>

          <div class="w-full px-4 lg:w-4/12">
            <h5 class="pb-4 text-xl font-semibold text-center">
              Profile Page
            </h5>
            <Link to="/profile">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
              >
                <img
                  alt="..."
                  class="h-auto max-w-full align-middle border-none rounded-lg"
                  src="{profile}"
                />
              </div>
            </Link>
          </div>

          <div class="w-full px-4 lg:w-4/12">
            <h5 class="pb-4 text-xl font-semibold text-center">
              Landing Page
            </h5>
            <Link to="/landing">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
              >
                <img
                  alt="..."
                  class="h-auto max-w-full align-middle border-none rounded-lg"
                  src="{landing}"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-20 overflow-hidden bg-gray-700">
  <div class="container pb-64 mx-auto">
    <div class="flex flex-wrap justify-center">
      <div class="w-full px-12 ml-auto mr-auto md:w-5/12 md:px-4 md:mt-64">
        <div
          class="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-white rounded-full shadow-lg"
        >
          <i class="text-xl fas fa-code-branch"></i>
        </div>
        <h3 class="mb-2 text-3xl font-semibold leading-normal text-white">
          Open Source
        </h3>
        <p class="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-500">
          Since
          <a
            href="https://tailwindcss.com/?ref=creativetim"
            class="text-gray-400"
            target="_blank"
          >
            Tailwind CSS
          </a>
          is an open source project we wanted to continue this movement too. You
          can give this version a try to feel the design and also test the
          quality of the code!
        </p>
        <p class="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-500">
          Get it free on Github and please help us spread the news with a Star!
        </p>
        <a
          href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index"
          target="_blank"
          class="inline-block px-6 py-4 mt-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-gray-800 rounded shadow outline-none github-star focus:outline-none active:bg-gray-700 hover:shadow-lg"
        >
          Github Star
        </a>
      </div>

      <div class="relative w-full px-4 mt-32 ml-auto mr-auto md:w-4/12">
        <i
          class="absolute left-auto text-gray-800 fab fa-github text-55 -top-150-px -right-100 opacity-80"
        ></i>
      </div>
    </div>
  </div>
</section>

<section class="relative pt-32 pb-16 bg-gray-300">
  <div
    class="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
    style="transform: translateZ(0);"
  >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        class="text-gray-300 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>

  <div class="container mx-auto">
    <div
      class="relative z-10 flex flex-wrap justify-center px-12 py-16 -mt-64 bg-white rounded-lg shadow-xl"
    >
      <div class="w-full text-center lg:w-8/12">
        <p class="text-4xl text-center">
          <span role="img" aria-label="love">
            😍
          </span>
        </p>
        <h3 class="text-3xl font-semibold">
          Do you love this Starter Kit?
        </h3>
        <p class="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
          Cause if you do, it can be yours now. Hit the buttons below to
          navigate to get the Free version for your next project. Build a new
          web app or give an old project a new look!
        </p>
        <div class="flex flex-col mt-10 sm:block">
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index"
            target="_blank"
            class="px-6 py-4 mb-2 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none get-started focus:outline-none active:bg-red-600 hover:shadow-lg"
          >
            Get started
          </a>
          <a
            href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index"
            target="_blank"
            class="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-gray-800 rounded shadow outline-none github-star sm:ml-1 focus:outline-none active:bg-gray-700 hover:shadow-lg"
          >
            <i class="mr-1 text-lg fab fa-github"></i>
            <span>Help With a Star</span>
          </a>
        </div>
        <div class="mt-16 text-center"></div>
      </div>
    </div>
  </div>
</section>
<Footer />
