import React from "react";
import { iconcopy } from "../assets";
import { DivStyles, InputStyles, ImageStyles, CopyDiv } from "../Styles";

type GenerateProps = {
  password: string;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  copytoclip: (str: string) => Promise<void>;
  copied: boolean;
};

const Input = ({
  password,
  handleFormChange,
  copytoclip,
  copied,
}: GenerateProps) => {
  return (
    <DivStyles>
      <InputStyles
        type="text"
        placeholder="PTx1f5DaFX!"
        value={password}
        onChange={handleFormChange}
      />
      <CopyDiv>
        <small style={{ fontSize: "18px" }}>{password && copied ? "COPIED" : ""}</small>
        <div onClick={() => copytoclip(password)}>
          <ImageStyles src={iconcopy} alt="copy icon" />
        </div>
      </CopyDiv>
    </DivStyles>
  );
};

export default Input;
