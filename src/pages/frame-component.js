import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.sideNavParent}>
      <div className={styles.sideNav}>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/frame-36.svg" />
          <div className={styles.dashboardParent}>
            <Button className={styles.dashboard} variant="primary">
              Dashboard
            </Button>
            <Button className={styles.dashboard} variant="primary">
              Groups
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.createForm}>
        <div className={styles.createFormInner}>
          <div className={styles.materialSymbolsaddBoxOutliParent}>
            <img
              className={styles.materialSymbolsaddBoxOutliIcon}
              alt=""
              src="/materialsymbolsaddboxoutline.svg"
            />
            <div className={styles.newForm}>New Form</div>
          </div>
        </div>
        <div className={styles.createFormInner}>
          <div className={styles.materialSymbolsaddBoxOutliGroup}>
            <img
              className={styles.materialSymbolsaddBoxOutliIcon}
              alt=""
              src="/materialsymbolsaddboxoutline.svg"
            />
            <div className={styles.newForm}>Template</div>
          </div>
        </div>
        <div className={styles.createFormInner}>
          <div className={styles.materialSymbolsaddBoxOutliGroup}>
            <img
              className={styles.materialSymbolsaddBoxOutliIcon}
              alt=""
              src="/materialsymbolsaddboxoutline.svg"
            />
            <div className={styles.newForm}>Template</div>
          </div>
        </div>
        <div className={styles.createFormInner}>
          <div className={styles.materialSymbolsaddBoxOutliGroup}>
            <img
              className={styles.materialSymbolsaddBoxOutliIcon}
              alt=""
              src="/materialsymbolsaddboxoutline.svg"
            />
            <div className={styles.newForm}>Template</div>
          </div>
        </div>
        <div className={styles.createFormInner}>
          <div className={styles.materialSymbolsaddBoxOutliGroup}>
            <img
              className={styles.materialSymbolsaddBoxOutliIcon}
              alt=""
              src="/materialsymbolsaddboxoutline.svg"
            />
            <div className={styles.newForm}>Template</div>
          </div>
        </div>
        <div className={styles.createFormInner}>
          <div className={styles.materialSymbolsaddBoxOutliGroup}>
            <img
              className={styles.materialSymbolsaddBoxOutliIcon}
              alt=""
              src="/materialsymbolsaddboxoutline.svg"
            />
            <div className={styles.newForm}>Template</div>
          </div>
        </div>
      </div>
      <div className={styles.recentForms}>
        <div className={styles.recentForms1}>Recent forms</div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
            <Form.Group className={styles.previewParent}>
              <Form.Label>Preview</Form.Label>
              <Form.Control as="textarea" placeholder="Unititled" />
            </Form.Group>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.previewWrapper}>
                  <div className={styles.newForm}>Preview</div>
                </div>
              </div>
              <div className={styles.unititled}>Unititled</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
