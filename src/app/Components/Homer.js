// complete this if got time
export default function Home() {
  return (
    <>
      {/* <div>
        <Image
          src="/home-phones.png"
          layout="fill"
          className="object-contain"
        />
      </div> */}

      <div>
        <div className="cursor-pointer h-40 w-40 relative">
          <Image
            src="/Instagram_logo_black.webp"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>Login with Google</div>
        <div></div>
        <div>Login with Facebook</div>
      </div>
    </>
  );
}
