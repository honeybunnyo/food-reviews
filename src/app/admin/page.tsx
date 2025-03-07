import produce from "immer";
import React, { useRef, useEffect, useState } from "react";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import { FieldContextProvider } from "./components/form/context";
import Form from "./components/form/form";
import CloseFullscreenOutlinedIcon from "@mui/icons-material/CloseFullscreenOutlined";
import "./styles.css";

const page = () => {
  const [fieldState, setFieldState] = React.useState({
    title: {
      value: "Lorem ispum dolor...",
      config: {
        type: "RichText",
        placeholder: "Placeholder...",
        label: "Title",
        props: { label: "Heading" }
      }
    },
    text: {
      value:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper est ut sem suscipit euismod. Suspendisse potenti. Donec cursus metus sollicitudin ex eleifend faucibus sollicitudin tempor velit. Maecenas id ultricies lectus.</p>",
      config: {
        type: "RichText2",
        placeholder: "Placeholder...",
        label: "Text",
        props: { label: "Introduction Text" }
      }
    },
    cta: {
      value: "This is a button",
      config: {
        type: "KeyText",
        label: "CTA",
        placeholder: "Placeholder...",
        props: { label: "Call to Action label" }
      }
    },
    bg: {
      value: "#111",
      config: {
        type: "Select",
        label: "CTA",
        placeholder: "Placeholder...",
        props: { label: "Background Color" }
      }
    },
    img: {
      value:
        "https://cdn.dribbble.com/users/374165/screenshots/15724702/media/3e51e5cec73ae7de11dd2757d24bdf4e.png",
      config: {
        type: "Image",
        label: "Image",
        placeholder: "Placeholder...",
        props: { label: "Feature Image" }
      },
      child: {
        alt: {
          value: "Alt text",
          config: {
            type: "KeyText",
            label: "Alt text",
            placeholder: "Placeholder...",
            props: { label: "Alt text" }
          }
        }
      }
    }
  });

  const onAddAfield = (payload, id) => {
    setFieldState(
      produce((draft) => {
        draft[id] = { ...payload };
      })
    );
  };

  const onFieldChange = React.useCallback((event) => {
    event.preventDefault();
    setFieldState(
      produce((draft) => {
        draft[event.target.name].value = event.target.value;
      })
    );
  }, []);

  useEffect(() => {
    console.log("mounted");

    return () => console.log("unmounting... clean up here");
  });

  const onChangeImage = React.useCallback(({ name, src }) => {
    setFieldState(
      produce((draft) => {
        draft[name].value = src;
      })
    );
  }, []);

  const onRichTextUpdate = React.useCallback(({ name, html, text }) => {
    setFieldState(
      produce((draft) => {
        draft[name].value = html;
      })
    );
  }, []);

  const ref = useRef(null);

  const [isExpand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!isExpand);
  };

  return (
    <FieldContextProvider
      form={fieldState}
      onChange={onFieldChange}
      addField={onAddAfield}
      onRichTextUpdate={onRichTextUpdate}
      onChangeImage={onChangeImage}
    >
      <div className="wrap">
        <div className="leftView">
          <div className="controle">
            <div className="sliceName">Primary button</div>
          </div>
          <div className="preview">
          </div>
        </div>

        <div ref={ref} data-expand={isExpand} className="sidebar">
          <div className="controle">
            <div>
              <button onClick={handleExpand} className="secondary icon">
                {isExpand ? (
                  <CloseFullscreenOutlinedIcon />
                ) : (
                  <OpenInFullOutlinedIcon />
                )}
              </button>
            </div>
            <button className="primary">Save mocks</button>
          </div>
          <Form />
        </div>
      </div>
    </FieldContextProvider>
  );
}

export default page