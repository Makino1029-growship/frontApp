import { CreateProvider } from "../context/Context";
import { useRouter } from "next/router";
import { useState } from "react";
import CreateEmployee from "../components/CreateEmployeePage";
import CreateConfirm from "../components/CreateConfirm";
import Succeeded from "../components/Succeeded";

const Page = () => {
  //　エラーstate、更新関数の設定
  const [errorStatus, setErrorStatus] = useState(null);

  // 関数の宣言：エラーstateの変更
  const handleSaveError = (status) => {
    setErrorStatus(status);
  };

  // クエリパラメータの情報にアクセスし、stepの値を取得する
  const router = useRouter();
  const step = router.query.step ?? 0;

  return (
    <>
      <CreateProvider>
        {step === "create" && <CreateEmployee errorStatus={errorStatus} />}
        {step === "confirm" && <CreateConfirm onSaveError={handleSaveError} />}
        {step === "succeeded" && <Succeeded />}
      </CreateProvider>
    </>
  );
};

export default Page;
