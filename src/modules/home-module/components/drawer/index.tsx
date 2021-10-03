import React, {memo, useEffect} from 'react';
import { CustomDrawer, CustomInput } from './drawer-style/default';
import Avatar from '../avatar';
import { Form, Select, SelectItem } from 'carbon-components-react';
import FilterController from './controller/FilterController';
import { IFilterControl } from '../../../../model/IFilterControl';
import { IFilter } from '../../../../model/IFilter';
import { buildKey } from '../../../../utils/unique-key';

const Drawer: React.FC<{}> = () => {

    return (
        <>
            <CustomDrawer>
                <div className="drawer-content">
                    <Avatar />
                    <hr/>
                    <Form>
                        <div style={{marginBottom: '2rem'}}>
                            <CustomInput
                                className="mt20"
                                helperText="Search keyword(s) for open-source project(s)..."
                                id="test2"
                                invalidText="Invalid error message."
                                labelText=""
                                placeholder="Search keyword(s) for open-source project(s)..."
                            />
                            {
                                FilterController.getFilters().map((item: IFilterControl) => {
                                    return (<Select
                                        className="mt20"
                                        defaultValue="placeholder-item"
                                        helperText=""
                                        id={buildKey()}
                                        invalidText=""
                                        labelText={item.labelText}
                                        onChange = {(event) => FilterController.handleChangeOption(event, item.type)}
                                    >
                                        {
                                            item.list.map((it: IFilter) => {
                                                return <SelectItem key={buildKey()} text={it.label} value={it.name} />
                                            })
                                        }
                                    </Select>);
                                })
                            }
                        </div>
                    </Form>
                </div>
                <a href="https://github.com/sanix-darker/zolo" target="_blank" className="source-link"></a>
            </CustomDrawer>
        </>
    );

}

export default memo(Drawer);