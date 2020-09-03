<template>
  <div class="container" id="app">
    <div class="app">
      <header data-v-8086e85e id="J-page-header" class="page-header collapse">
        <div class="nav-container">
          <div class="nav-left">
            <div class="logo">
              <a href="#/zh" class="router-link-active">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAB7VJREFUaAXlWwlslEUUfvNv78MFSi8VVEARRdQYbDkqbVBSiEhiYjgSRGIiRo2JqWKs0KwcakSShgQTQhSJYsVAE0+KGs6mR0gVNYQCGjEi3bZAW7bndnfH9/7ubnf/zu7+/+xfdqsv2fz/zD/z5n1zvHnz5i2DUaKlNp52Fdrmcxd/iAOfzoFNZwzyOOeZwCBTbZaDgzHm4BzsDPg5BuwcS2BNWZBT+7WN9Y6GaMxMpnNt9hzuhlUe4E8i3wLgkCTFn4ET6zUqwKqZBT6rs+W1SfERVDIF8Fxb2yMet+c15F+KI5ggaEc6C2eACyvXKBZlW50t54Q0I2/FqADPq2gpcXtgEweYH60geuqjsLWQABsbbPnH9JQXlZECXLS1Pd/Z594OwFeKmI5+HqtKSrWUnXwzu8VoW4YBF1a0LeYeTxWCtRptzNzyrIspysqGTTmHjPBVjBQu2NBaxrnnm9iDJam5lWQhmYxg0DXCi3fw5I42+y5cq2uMML9RZRHE3vE5eesOvcwGIrUZEXDR245sZ1/Pl8D5nEjMYvqdsfqk1PRlJ8sz28PJEXZK08iOCbCEEAeEZCWZpQHTNI77kQ1Eh6BVmQPzNO8hR1hVUHG6ZjUYgpKkZ8IpMuEaVrce0sach+yQoFbiLcGYhzHlcdGWNQKw16g4Gx9bTzQ9ybrQOJmhNU5G2L1eC8o0oyI7U4Hie1LgvsmJcGdeIkzIUCA9mUH/IIfOXg+0drrh9F+D8NOfTvj5ohM8OCd9tO+lLJiam+hL+p87v3fAJyd7/GnxC7cOYYFVgd+DRrjQ1lLMXXA0sIDs+wO3JcLa4gx4eGoS4AFAFxs7gq8+1QsHG3uhZ4BDdICHmmQJUBJoewePsAs265IsTKHUJAZvLLsJFs1KDVNK/ClvnAVeeCwTlhemwfZvHeJCRnOHMBX5qvm7fs7G9gUe7jrm+yDzvD3bAu+sGA935AT3owwvqoNHTeHs0Delh1tVWEJx/ebs45Tj18Ic3K8OFzH+Nm96Mny0Lss0sCSB3qUQSdpAbCpg8lRgpdJIFUN9nzzRApufskJasr//QhWNVX6pFyMep5HILSPrqUhGJfruinERwbZdd0Nt8wD8bh+Eaz0eoLWeZ7VAwbRkVYNbFP/qMr1TCBt3M9LWlSpgrw9KqqHXl1phimDr8DFrQc2760cHHP61H9ekL3f4ued4D+SjsnpuYQaU3p9i2jQebmHozYuxUiHvImYVaAvoSd97ayIseTC0Nq47PwCrd16Bml/EYH1tUKe8dbALyvd3Qr9T0Cu+gtE9CwirQq5UWe/isyUZIUWobe6Hsk87oLtfP4CjZwbUOi63/johBdB+QA8qYVXIb6z9piedhRZT4TSxF/ZyhwsqDnQJp3Ak3k1ocX3wg0l7sKYxwqqQk1yTrytJ5qISQtHsPtINvWgpydL++l745xp5Z80lwoqAmRTgWWgbi6gTNfBhXLPRELp+4YsG8y8eCKtC1x8ywt2VLwZcf2Eg6AAgw5vqnDgb0T1lmDVhVXCPGrrnMVidTj0i+qPVnKlImrtnAIfaRCKseH3jvdgyyJiOeCLqwCltFl11mMdLlQmxiodJh8ROl1gppYhnug6OI4sMjsL2pOAeLLUHOELsrzloLsYtIVZUWkwK8MV28VqdPSWslzSmfUFYUWmBXUaK5suDwmozbkmASVnxOcqEFU0Hfk4oeYRMOvmIiM6wzz8qpfhF7EzNI6wImEkB/u3vQaCtQ0QLZ6agiydF9CmmeYQVvR+sSVaKfbWhPYfly6wwe4rY1pZtL9p6hFWhABLciymmwjB91dQLdFAQUQoe8CvXjIe1C9IhMR6WNGIkrIo3WqZRJHSkPCdiLf+8E0LtyeTFWIfr+cAr2bC6KF31d+n02EZqWuZ7I2FVPR4ULYMeAb8r0wi35ssuqPzuOqx/IrTvPhf35hcXZao/N3ra6YAxKF7+QU1PlLeLgvhQgjDSUwVMoUHMzbbJ+rWqT/XBzElJYb0f1BgRjXpW5o2d47hzuAgjta+alt44qBrKkKVN1V2w+4gDPIF3JbLMzK9X44v18tvSFAcVbTsfHu1RXTTX+0w2+qMULBCbHzAFfeH5pzZK3lB/wQlPo+Pu0Om+uBhtwhQY0OYHTEAtClREC5jq27s8qhdy+Y4rsPd4N1waBXeNbjkxkC2w7IhDbcEGOy5u8wPOyGFw980JeF1qAWuaAqi7pImuVs9cEtvywUxZVeOWvKDrUlVLBxaiCDe8V11i9oX4tW4P1J2Xsm8CxTPwrl6Il2krBE1p+kg35hThhlcA8aV5tJKHS1PIA2LQ3v5TlRGAKVONjeBsPb2PSULZRfEdhCXsSirc0PIxOnLWjCXQCGhvw5b8Z0LJLBxhX2EK58OpXe9Lx/0TZVVlDiNoWMAUu0jhfGMCtDf0MFK8ZVjA1FEUuzghO7eEpkqYjovpJ5KNZIwUZ0lCYln9pEa4Mf5e3ASs0U6CCqpxSy4Gq+sjQ4CJ5f8qQJwAk7qnCDecHFWUjg2pfwGYEWrrCSeT4REOZEaBbIBxULh1zQ/MH613FDY2f/LQAqIYL29o0Kj9jYeB5X1frJW2fSPpqEZY21DB1tZcpZ+v9AaQ/Hf/qKUFTul4/SvevyLy2yevqLD7AAAAAElFTkSuQmCC"
                  preload
                  class="logo-img"
                />
                <span>游戏姓名生成器</span>
              </a>
            </div>
            <i class="icon icon-menu nav-icon"></i>
          </div>
          <div class="nav-right">
            <ul class="navbar">
              <li>
                <a href="#/" class>首页</a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/cute-angelia/game-name-generate"
                  class
                >Github</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div width="600px">
        <div class="row at-row">
          <div :class="`col-md-2`" style="line-height: 56px;">
            <div class="at-box-row bg-c-brand-dark"></div>性别
          </div>
          <div :class="`col-md-22`" style="line-height: 36px;">
            <div class="at-box-row bg-c-brand-light">
              <at-checkbox v-model="sex_boy" label="男" checked>男</at-checkbox>
              <at-checkbox v-model="sex_girl" label="女">女</at-checkbox>
            </div>
          </div>

          <div :class="`col-md-2`" style="line-height: 46px;">
            <div class="at-box-row bg-c-brand-dark"></div>个数
          </div>
          <div :class="`col-md-22`" style="line-height: 46px;">
            <div class="at-box-row bg-c-brand-light">
              <at-input v-model="numz" placeholder></at-input>
            </div>
          </div>

          <div :class="`col-md-2`" style="line-height: 46px;">
            <div class="at-box-row bg-c-brand-dark"></div>输出
          </div>
          <div :class="`col-md-22`">
            <div class="at-box-row bg-c-brand-light">
              <at-textarea min-rows="4" max-rows="40" v-model="output" placeholder></at-textarea>
            </div>
          </div>

          <div :class="`col-md-2`">
            <div class="at-box-row bg-c-brand-dark"></div>
          </div>
          <div :class="`col-md-22`" style="line-height: 46px;">
            <div class="at-box-row bg-c-brand-light">
              <at-button type="primary" @click="ok">生成</at-button>&nbsp;&nbsp;
              <at-button @click="clear">清空</at-button>&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generate from "./name.js";

export default {
  data() {
    return {
      sex_boy: true,
      sex_girl: true,
      numz: 10,
      output: "",
    };
  },
  methods: {
    ok() {
      if (parseInt(this.numz) <= 0) {
        alert("填写数量有误");
        return;
      } else {
        this.numz = parseInt(this.numz);
      }

      var str = "";
      if (this.sex_boy && this.sex_girl) {
        str = generate(this.numz, "all");
      } else if (this.sex_boy) {
        str = generate(this.numz, "boy");
      } else {
        str = generate(this.numz, "girl");
      }
      this.output = str;
      console.log(this.sex_boy, this.sex_girl, this.numz);
    },
    clear() {
      this.output = "";
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app {
  color: #2c3e50;
  text-align: center;
}
h1,
h2 {
  font-weight: normal;
  margin: 16px 0;
}

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: transparent;
  transition: all 0.3s;
  z-index: 100;
}
.page-header.collapse {
  background-color: #fff;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
  opacity: 0.98;
}
.page-header.open {
  background-color: #fff;
}
.nav-container {
  margin: 0 auto;
  width: 90%;
  color: #1d1d1f;
}
.nav-container .nav-left {
  float: left;
}
.nav-container .nav-left .logo {
  position: relative;
  height: 80px;
  line-height: 80px;
}
.nav-container .nav-left .logo img {
  position: absolute;
  top: 50%;
  margin-top: -15px;
  width: 30px;
  height: 30px;
}
.nav-container .nav-left .logo span {
  margin-left: 40px;
  color: #3473e7;
  font-weight: bold;
  font-size: 16px;
}
.nav-container .nav-left .nav-icon {
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -10px;
  font-size: 20px;
}
.nav-container .nav-right {
  float: right;
}
.nav-container .nav-right .navbar {
  display: inline-block;
  margin: 0;
  padding: 0;
  height: 80px;
  font-size: 14px;
  line-height: 80px;
  list-style-type: none;
}
.nav-container .nav-right .navbar a {
  display: inline-block;
  color: #1d1d1f;
}
.nav-container .nav-right .navbar a::after {
  content: "";
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #6190e8;
}
.nav-container .nav-right .navbar a.router-link-active {
  color: #6190e8;
}
.nav-container .nav-right .navbar a.router-link-active::after {
  display: inline-block;
}
.nav-container .nav-right .navbar li {
  position: relative;
  display: inline-block;
  margin: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.nav-container .nav-right .navbar li:hover {
  color: #6190e8;
}
.nav-container .nav-right .navbar li:hover a {
  color: #6190e8;
}
.nav-container .nav-right .navbar li.disabled {
  color: #c9c9c9;
  cursor: not-allowed;
}
.nav-container .nav-right .btn-language {
  display: inline-block;
  margin: 0 24px;
  padding: 2px 12px;
  border: 1px solid #1d1d1f;
  border-radius: 2px;
  cursor: pointer;
  transition: color 0.3s, border 0.3s;
}
.nav-container .nav-right .btn-language:hover {
  color: #6190e8;
  border-color: #6190e8;
}
@media screen and (max-width: 767px) {
  .page-header {
    height: 60px;
  }
  .page-header.open .nav-right {
    height: 220px;
  }
  .nav-container {
    width: initial;
  }
  .nav-container .nav-left {
    position: relative;
    margin: 0 20px;
    float: none;
    text-align: center;
  }
  .nav-container .nav-left .logo {
    display: inline-block;
    height: 60px;
    line-height: 60px;
  }
  .nav-container .nav-left .nav-icon {
    display: inline-block;
  }
  .nav-container .nav-right {
    float: none;
    height: 0;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
    transition: all 0.3s;
    overflow: hidden;
  }
  .nav-container .nav-right .navbar {
    display: block;
    height: initial;
    line-height: 50px;
  }
  .nav-container .nav-right .navbar li {
    display: block;
  }
  .nav-container .nav-right .navbar a {
    width: 100%;
  }
  .nav-container .nav-right .navbar a.router-link-active::after {
    display: none;
  }
  .nav-container .nav-right .btn-language {
    margin: 16px;
  }
}
</style>
