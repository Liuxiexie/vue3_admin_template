<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
// 引入获取时间的函数
import { getTime } from '@/utils/time'
// 创建用户相关的小仓库
import useUserStore from '@/store/modules/user.ts'
const userStore = useUserStore()
// 创建路由
const $router = useRouter()
// 定义变量控制登录按钮加载的效果
const loading = ref(false)
// 登录表单数据
const loginForm = ref({
  username: 'admin',
  password: '111111',
})
// 登录表单元素
const loginFormRef = ref()
// 登录的回调
const login = async () => {
  // 表单校验通过之后再发送请求
  await loginFormRef.value.validate() // 会返回一个promise对象
  // 开始加载
  loading.value = true
  // 点击登录按钮后应该做什么
  // 通知仓库发起登录请求
  // 登录成功 -> 跳转路由
  // 登录失败 -> 弹出失败信息

  try {
    await userStore.userLogin(loginForm.value)
    // 登录成功进行路由的跳转
    $router.push('/')
    // 登录成功提示信息
    ElNotification({
      type: 'success',
      title: `HI,${getTime()}好`,
      message: '登录成功',
    })
    // 结束加载
    loading.value = false
  } catch (error) {
    // 登录失败提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
    // 结束加载
    loading.value = false
  }
}

// 定义自定义校验规则
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少 5 位'))
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少 6 位'))
  }
}

// 定义注册表单的校验规则
const rules = {
  username: [
    // { required: true, message: '请输入用户名', trigger: 'blur' },
    // {
    //   required: true,
    //   min: 6,
    //   max: 12,
    //   message: '用户名长度为 6 - 12位',
    //   trigger: 'change',
    // },
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // {
    //   required: true,
    //   min: 6,
    //   max: 12,
    //   message: '密码长度为 6 - 12位',
    //   trigger: 'change',
    // },
    { trigger: 'change', validator: validatorPassword },
  ],
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <h1>Vue-Admin</h1>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    width: 80%;
    height: 30vh;
    position: relative;
    top: 30vh;
    padding: 30px;
    background: url('@/assets/images/login_form.png');
    border: 3px solid #fff;
    border-radius: 20px;
    box-shadow: 17px 19px 15px -3px rgba(0, 0, 0, 0.2);
    h1 {
      font-size: 40px;
      color: white;
      text-align: center;
      margin-bottom: 20px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
